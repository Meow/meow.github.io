{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = [
      pkgs.buildPackages.nodejs-22_x
      pkgs.buildPackages.yarn
    ];
}
