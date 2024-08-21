import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "! This is my first time learning ICP";
  };

  public query func add(text1 : Text) : async (Text) {
    return "Hi" # text1 # ", nice to meet you!";
  };
};
