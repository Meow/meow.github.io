{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = [
      pkgs.buildPackages.nodejs-18_x
      pkgs.buildPackages.yarn
    ];
}
