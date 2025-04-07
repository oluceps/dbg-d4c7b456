{
  inputs,
  pkgs,
  ...
}:
{

  overlays = [ inputs.rust-overlay.overlays.default ];

  dotenv.enable = true;
  languages.javascript = {
    enable = true;
    npm.install.enable = false;
    pnpm.install.enable = false;
  };
  packages =
    with pkgs;
    [
      nodePackages_latest.pnpm
      typescript
      biome
      rustup
      wasm-pack
      (rust-bin.nightly.latest.default.override { extensions = [ "rust-src" ]; })
    ]
    ++ [ inputs.wrangler.packages.${pkgs.system}.default ];
}
