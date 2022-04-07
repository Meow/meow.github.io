{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = [
      pkgs.buildPackages.nodejs-16_x
      pkgs.buildPackages.yarn
    ];
}
