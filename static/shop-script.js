// JavaScript file for Shop Page

// References logged in user_id (/getLogin)


var app = angular.module('shopApp', []);
app.controller('shopControl', function($scope, $window) {

    $scope.showLogout = true;
    $scope.shops = [];

    
    $.getJSON('/getLogin', function(data) {
	
    	$('#greetUser').html("<b> Hello, " + data.loggedinFirstName + "! </b>");

	$('#fullName').html("Your name is <b>" + data.loggedinFirstName + " " + data.loggedinLastName + "</b>");
	$('#username').html("Your username is <b>" + data.loggedinUsername + "</b>");
	$('#email').html("Your e-mail is <pre>" + data.loggedinEmail + "</pre>");
	$('#createdOn').html("Your account was created on <pre>" + data.loggedinCreatedOn + "</pre>");

	$scope.loggedID = data.loggedinID;
	$scope.showLogout = true;

	
    })
    
	.fail ( function() {
	    $('#greetUser').html("You are not signed in. Contact an administrator for help. <br> &mdash; ClubHub Team");
	    $('#greetUser').parent().nextAll().remove();
	    return;
	});
    

    $scope.logout = function() {

	// POST all of logged in user's info -> /set
	$.ajax({
	    url: '/setLogin',
	    type: 'POST',
	    contentType: 'application/json',
	    data: JSON.stringify({

		message: 'Not logged in',

	    }),
	    crossDomain: true,

	    success: function() {
		$scope.loggedIn = false;
		$window.location.href = 'index.html';
	    },
	});

	$scope.showLogout = false;

    }


    $scope.goTo = function(link) {
	$window.location.href = link;
    }

    $scope.shops.push({ name: "Custom Ink - Get $5 off your $100 order!",
		        description: "Custom Ink is the t-shirt printing expert for your team, school, company, or any occasion.",
		        link: "/static/img/ci.html",
			image: '/static/img/custominklogo.jpg',
			bigImage: '/static/img/banner-customink.png',
		      });
    $scope.shops.push({ name: "Cafepress - 15% off your entire order!",
		        description: "Celebrate everyone's unique identity and passions with custom t-shirts, stickers, posters, coffee mugs and more.",
		        link: "https://www.cafepress.com?rlink=87e71b710f",
			image: "/static/img/cafepress-logo.png",
			bigImage: '/static/img/banner-cafepress.png',
		      });

    $scope.shops.push({ name: "Dick's Sporting Goods - Free shipping over $25!",
		        description: "Shop a wide selection of sports gear, equipment, apparel, and footwear!",
		        link: "https://www.dickssportinggoods.com?refer=fea75e848e",
			image: "/static/img/dickssportinggoods.png",
			bigImage: '/static/img/banner-dickssportinggoods.png',
		      });

    $scope.shops.push({ name: "Music & Arts - 15% off your $150 purchase!",
		        description: "Music & Arts is an online music store that also offers instrument rentals, music lessons & instrument repair at their locations nationwide.",
		        link: "https://www.musicarts.com?referralCode=03d1d2ea86",
			image: "/static/img/musicarts.png",
			bigImage: '/static/img/banner-musicarts.png',
		      });

    $scope.shops.push({ name: "Guitar Center - 10% off your entire purchase!",
		        description: "Guitar Center is the world's largest musical instruments retailer. Shop Guitars, Bass, Drums, Amps, DJ, Keyboards, Pro-Audio and more. Most orders ship free!",
		        link: "https://www.guitarcenter.com?referralLink=e0h3o9fh9fj20gug84",
			image: "/static/img/guitarcenter.png",
			bigImage: '/static/img/banner-guitarcenter.png',
		      });

    $scope.shops.push({ name: "Amazon - Get 10% off your entire order!",
		        description: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, and more!",
		        link: "https://www.amazon.com?refer=cbc6279491",
			image: "/static/img/amazon.png",
			bigImage: '/static/img/banner-amazon.png',
		      });

    $scope.shops.push({ name: "Michael's - Get 40% off any item!",
		        description: "Shop and save on arts and crafts, custom framing & seasonal products online!",
		        link: "https://www.michaels.com?referAffil=d0bd3cab20",
			image: "/static/img/michaels.png",
			bigImage: '/static/img/banner-michaels.png',
		      });

    $scope.shops.push({ name: "Target - Free 2-day shipping on your $35 order!",
		        description: "Expect more and pay less from an assortment of everyday items ranging from school & office supplies and party supplies, to movies and snacks.",
		        link: "https://www.target.com?affiliateRefer=34a04005bc",
			image: "/static/img/target.png",
			bigImage: '/static/img/banner-target.png',
		      });



}); // end Angular controller
