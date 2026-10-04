{
  description = "Infernal UI";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" ];
      forAllSystems = nixpkgs.lib.genAttrs systems;

      packageName = "infernal-ui-docs";
      packageVersion = "0.1.0";
    in
    {
      overlays.default = final: prev:
        let
          nodejs = prev.nodejs_24;
          pnpm = prev.pnpm_11;
        in
        {
          "${packageName}" = prev.stdenv.mkDerivation (finalAttrs: {
            pname = packageName;
            version = packageVersion;

            src = self;

            nativeBuildInputs = [
              nodejs
              pnpm
              prev.pnpmConfigHook
            ];

            pnpmDeps = prev.fetchPnpmDeps {
              inherit (finalAttrs) pname version src;
              inherit pnpm;
              fetcherVersion = 4;

              # hash = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
              hash = "sha256-FLFTtVnM0J2L7yIdVehuGNYOuOK+MAX0duCx34YwGoQ=";
            };

            buildPhase = ''
              runHook preBuild

              export pnpm_config_pm_on_fail=ignore

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
        };

      packages = forAllSystems (system:
        let
          pkgs = import nixpkgs {
            inherit system;
            overlays = [ self.overlays.default ];
          };

          docs = pkgs.${packageName};
        in
        {
          inherit docs;
          default = docs;
        });
    };
}
