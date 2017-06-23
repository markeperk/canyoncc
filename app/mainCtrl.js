var app = angular.module('canyoncc');

app.controller('mainCtrl', function ($scope) {

  $scope.selectTherapist = function (therapist) {
    $scope.showBiography = true;
    $scope.selected = therapist;
  };

  $scope.therapists = [
    {
      name: 'Scott Owen, PhD',
      imgUrl: 'img/team/owen.jpg',
      abbreviated: 'Dr. Owen holds two Bachelors degrees in Psychology and Social Psychology from the University of Utah and BYU, respectively. He received his Masters and Doctoral degrees in Counseling Psychology from BYU and is a licensed therapist. He has worked as a therapist for the past 23 years. He is a founding partner of Canyon Counseling Center.',
      bio1: 'Dr. Owen holds two Bachelors degrees in Psychology and Social Psychology from the University of Utah and BYU, respectively. He received his Masters and Doctoral degrees in Counseling Psychology from BYU and is a licensed therapist. He is a founding partner of Canyon Counseling Center.',
      bio2: 'Scott has experience treating individuals with a wide range of mental and emotional health concerns including: depression, anxiety disorders, phobias, posttraumatic stress disorder, trauma recovery, grieving, ADHD, pornography, sexual addictions and same-gender attraction. He is a theistic therapist meaning he uses Christian values in his therapy. He is a cognitive-behavioral therapist with a person-centered, Rogerian style. He believes the therapeutic relationship is a critical factor in the success of the therapy experience. He has worked as a therapist for the past 23 years in several settings such as: private practice at Canyon Counseling Center, New Haven Residential Treatment Center for Adolescents, and at the Counseling Center at Brigham Young University.',
      bio3: 'He loves being outdoors. He enjoys boating, waterskiing and any activity he can do from the driver\'s seat. Above all else, he loves being with his beautiful wife and children. As a father of three and a husband of 33 years, Scott brings firsthand knowledge of the importance of eternal, healthy relationships into the therapeutic process.',
      exceptions: '* Please note that currently Dr. Owen does not treat: couples, individuals with eating disorders, children 13 or younger, or individuals diagnosed with Borderline Personality Disorder.'
    },
    {
      name: 'Alan Hansen, PhD',
      imgUrl: 'img/team/hansen.jpg',
      abbreviated: 'Dr. Hansen holds a masters and doctoral degree in Counseling Psychology from Brigham Young University and is a licensed psychologist. He is trained in individual, couples, family and group therapy and has worked as a therapist for the past 20 years. He is a founding partner of Canyon Counseling Center in Provo, Utah.',
      bio1: 'Dr. Hansen holds a masters and doctoral degree in Counseling Psychology from Brigham Young University and is a licensed psychologist. He is a founding partner of Canyon Counseling Center in Provo, Utah.',
      bio2: 'Alan has experience treating a wide-range of mental and emotional challenges including: depression, anxiety disorders, phobias, post-traumatic stress disorder, trauma recovery, grieving, ADHD, pornography, sexual addictions, and same-gender attraction. He is trained in individual, couples, family and group therapy. He is a theistic therapist and approaches therapy from a Christ centered perspective. He has worked as a therapist for the past 20 years in several settings, including: private practice at Canyon Counseling Center, at New Haven Residential Treatment Center for adolescents, and as a counselor at Timpview High School.',
      bio3: 'He loves living and running in the mountains. He enjoys waterskiing and any activity he can do with his family. As a father of five and a husband of 25 years, Alan knows firsthand the value and importance of family relationships.',
      exceptions: '* Please note that currently Dr. Hansen currently does not treat couples or children younger than 14 years old.'
    },
    {
      name: 'Shawn Edgington, PhD',
      imgUrl: 'img/team/edgington.jpg',
      abbreviated: 'Dr. Edgington completed a Bachelor’s degree in Psychology from BYU, a Master’s degree in Marriage and Family Therapy from USU and a Ph.D. in the Counseling Psychology program from BYU. He is a Licensed Psychologist and has worked in the mental health field for 20 years. He has worked in private practice at Canyon Counseling Center since 2001.',
      bio1: 'Dr. Edgington completed a Bachelor’s degree in Psychology from BYU, a Master’s degree in Marriage and Family Therapy from USU and a Ph.D. in the Counseling Psychology program from BYU. He is a Licensed Psychologist and has worked in the mental health field for 20 years. He has worked in private practice at Canyon Counseling Center since 2001.',
      bio2: 'Shawn specializes in treating include the following clinical issues: depression, anxiety disorders, eating disorders, sexual abuse recovery, various addictions (particularly sexual addictions), phobias, post-traumatic stress disorder, at-risk teenagers and parenting strategies. He is a theistic therapist, meaning he uses Christian values in his therapy. He believes that the therapeutic relationship is a critical factor in the success of the therapy experience.',
      bio3: 'He loves the outdoors, particularly fly fishing (dry flies), camping, hiking, hunting and being with his family. As a father of six and a husband of 16 years, Shawn brings firsthand knowledge of healthy relationships into the therapeutic process.',
      exceptions: '* Please note that currently Dr. Edgington does not treat couples or individuals diagnosed with Borderline Personality Disorder.'
    }
  ]

  $scope.deselectTherapist = function () {
    $scope.showBiography = false;
    $scope.selected = null;
  }

});