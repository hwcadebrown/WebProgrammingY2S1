// renders each person so they can be seen on the arena (also creates hitboxes)
function renderperson() {
  // assigns the left property to the x-coord of the first person
  $(person).css('left', personX);
  // assigns the top property to the y-coord of the first person
  $(person).css('top', personY);
  // assigns the left property to the x-coord of the power person
  $(powerperson).css('left', personXpower);
  // assigns the top property to the y-coord of the power person
  $(powerperson).css('top', personYpower);
  // assigns the left property to the x-coord of the bad person
  $(badperson).css('left', personXbad);
  // assigns the top property to the y-coord of the bad person
  $(badperson).css('top', personYbad);
}
