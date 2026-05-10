{
  description = "Infernal UI";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" ];

      forAllSystems = nixpkgs.lib.genAttrs systems;

      mkPkgs = system:
        import nixpkgs {
          inherit system;
        };
    in
    {
      packages = forAllSystems (system:
        let
          pkgs = mkPkgs system;

          nodejs = pkgs.nodejs_24;
          pnpm = pkgs.pnpm_9.override {
            inherit nodejs;
          };
        in
        {
          docs = pkgs.stdenv.mkDerivation (finalAttrs: {
            pname = "infernal-ui-docs";
            version = "0.1.0";

            src = ./.;

            nativeBuildInputs = [
              nodejs
              pnpm
              pkgs.pnpmConfigHook
            ];

            pnpmDeps = pkgs.fetchPnpmDeps {
              inherit (finalAttrs) pname version src;
              pnpm = pnpm;
              fetcherVersion = 3;

              hash = "sha256-ud8weKm4E9H5fHgnJbmk+rM2OAn19j0wPN7rBlY0nN0=";
            };

            buildPhase = ''
              runHook preBuild

              pnpm build

              runHook postBuild
            '';

            installPhase = ''
              runHook preInstall

              mkdir -p $out
              cp -r apps/docs/dist/* $out/

              runHook postInstall
            '';
          });

          default = self.packages.${system}.docs;
        });
    };
}