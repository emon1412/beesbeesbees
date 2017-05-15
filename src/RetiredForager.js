var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype.forage = function() {
  // body...
  return "I am too old, let me play cards instead";
}
RetiredForagerBee.prototype.gamble = ForagerBee.prototype.forage;
RetiredForagerBee.prototype.constructor = RetiredForagerBee;