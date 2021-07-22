{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = [
      pkgs.buildPackages.nodejs-14_x
      pkgs.buildPackages.yarn
    ];
}
