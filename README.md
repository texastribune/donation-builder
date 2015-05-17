# Donation Builder

## About the Project

Donation Builder is a framework to help organizations showcase their work and seek new members and support for funding their projects. The primary audience for this project is nonprofit organizations with small teams who want a better and quick-to-setup way to inform potential new members and supporters about their mission and work, as well as easily lead them through the donation process.

### Why we built it this way

We chose Middleman for the project because we wanted a mostly static site. The [Google Drive gem for Middleman](https://github.com/voxmedia/middleman-google_drive) provides the ability to easily update the content on the site without touching the code once it's set up, for those elements that are dynamic.

## Features

* Fully responsive framework ready to be customized with an organization's visual brand, including images, colors, and fonts
* Ability to load information from Google Spreadsheets, so that non-technical members of your team can update membership levels and benefits, contact information, organization information, social share messages, content to highlight, and more
* Ready to easily set up with your Google Analytics account
* Ability to hook up to a variety of payment processors, including Dwolla, Givalike, and DonorPerfect, to accept the donations
* Ability to deploy through Amazon Web Services or Heroku

## Support

* Chrome, Firefox, Safari, IE9+
* Users with JavaScript disabled
* Tested with [Browserstack](https://www.browserstack.com/) across a variety of devices

## Getting Started

To get started, clone down the project repo.

If you don't already have Ruby installed, you'll need to [install it](https://www.ruby-lang.org/en/documentation/installation/). The version of Ruby you'll need is 2.1.4, which is specified in the .ruby-version file.

You'll need the Ruby gem bundler. If you need to install the bundler, run:

    gem install bundler

Install the necessary gems from the Gemfile by running:

    bundle install

## Development

Middleman is configured to live reload the project in the browser as changes are made to files. To start up the Middleman server, run:

    bundle exec middleman

To build the site, run:

    bundle exec middleman build

When Middleman builds, it creates a static file for each file located in the source folder. The build process is configured in config.rb.

## Integrating with Google Drive

Donation Builder uses the [middleman-google_drive gem](https://github.com/voxmedia/middleman-google_drive) to integrate with Google Drive. You'll want to head over there and be sure to configure your Google Docs authentication as detailed in the Setup section.

The project is set up so that the site can be updated and customized through Google Spreadsheets. You'll want to use the same setup for your Google Spreadsheets to correctly pull in the info. You can view the spreadsheet setup [here](https://docs.google.com/spreadsheets/d/1GhhJ0nC35YAH21Dyt6U7tGBYqbP45CWdm1Ui1ReAfeE/pubhtml).

## Analytics

You can hook up the project to your Google Analytics account to track how people are interacting with the site. In the Google Spreadsheet, you should have an Analytics tab. Here, there should be a column labeled 'google_analytics_id', and this is where you list your ID. There should also be a second column labeled 'google_analytics_domain', and this is where you should list your domain.

See [this screenshot](https://www.dropbox.com/s/jwi7u4vdls9wao9/Analytics_tab.png?dl=0).

## Visual Customization

### Brand colors

Donation Builder uses Sass to write its styles. In _settings.scss, you'll see some color variables. The project uses three theme colors, a main theme color, a secondary theme color, and a tertiary theme color. These colors are then applied to the buttons, navigation links, labels, and more throughout the project to quickly get it set up with your organization's colors.

### Typography

You can customize the site with the fonts your organization already uses. This can also be done in the _settings.scss file. Look for the variables $main-font and $secondary-font. The default settings here are 'Roboto' with a sans-serif fallback for the main font, and 'Open Sans Condensed', also with a sans-serif fallback, for the secondary font.

### Images

To switch out most images, you can replace an image in the /source/images folder that corresponds with the image you'd like to change. Attempts were made to name these images in an intuitive manner so that it's clear where each image will be seen. The images and where they will appear is also detailed below in case any images are not clear. If you still aren't sure, try switching out the image and see where it appears in the project.

#### Logo

Your organization's logo will appear in the masthead of each page on the site. You'll want this logo to be approximately 300px wide and 60px tall. In the source/images/ folder, you'll see an image named logo.png. Replace this image with your logo, and your logo will appear in the masthead.

#### Favicon

You'll also probably want to customize the favicon that's seen on the browser tab. To do this, replace the image called favicon.ico with your favicon.

#### Banner Backgrounds

You can customize the backgrounds used for the banners at the top of each page with your organization's photos. To set a background for the landing page banner, replace the photo named landing-header-bg.jpg. To set a background for the premium membership page banner, replace the photo named premium-membership-banner.jpg.

### Membership Levels

Your organization's membership level names, donation amounts, and benefits can be set up in the Google Spreadsheet as well. This can be done in the MemberLevels tab. See [this screenshot](https://www.dropbox.com/s/m80bmqczm5znty4/MemberLevels_tab.png?dl=0).

#### name

This field is your membership level name. For example, "Activist" or "Enthusiast".

#### donation_amount

This is the donation amount that people should give to be at the membership level. Add the amounts without dollar signs. For amounts over 999, include the comma (i.e. 1,000).

#### most_popular

Set this to TRUE for your most popular membership level, and leave this field blank for all other levels. This will activate a "Most Popular" flag when this level is displayed on the landing page and on the membership grid page.

#### premium_member

Set this to TRUE for any premium membership levels that your organization offers. This will activate a "Premium Member" flag when this level is displayed on the landing page and on the membership grid page. It also tells the project to feature these premium membership levels on the premium member page.

#### benefits

You can list the benefits for each membership level here. Between each benefit, include <br> to signal a line break. You may also want to include "Plus all above benefits" as one of the benefits in this field.

## Content Customization

On both the landing page and the premium membership page, there are four spots provided for you to showcase either images or videos to communicate to people what their donations will go toward supporting. These can be set in the Showcase tab. See [this screenshot](https://www.dropbox.com/s/7av2y8xu5oaq8ea/Showcase_tab.png?dl=0).

## Navigation Links

You can add more navigation links to the navbar as needed. These links will be included in both the desktop nav and the mobile nav. For example, you might want to add a "Quick Donation" link or a link to more information about your organization. Additional nav links can be set up in the NavLinks tab. Include the url the link should go to and the text that should appear for each url you'd like to add to the nav. It's recommended that you add only up to three additional navigation links so as not to overwhelm the page.

## Footer Links

You can set up the links that should appear in the footer in the FooterLinks tab. For each link you'd like to include in the footer, add the url and the text that should appear. Note that the project is configured to hide the footer by default at a device width of 985px. You can change this in the _footer.scss file if you prefer a different behavior here.

## Social Sharing

You can also customize the default messages for when people choose to email, tweet, or post to Facebook about donating to your organization. This can also be controlled from Google Spreadsheets in the Social tab. See [this screenshot](https://www.dropbox.com/s/8gjs5vksc7b0wmj/Social_tab.png?dl=0) of the tab. The Facebook fields set the [Opengraph](http://ogp.me/) metadata for your site, to ensure Facebook scrapes and displays the information you want when people post.

To set your Facebook share image, you also need to include the image you'd like to use there in the /source/images folder named facebook-share-image.png.

## Integrating with a Payment Processor

The project is designed to be able to be integrated with the payment processor that works best for you. It's set up to integrate most fluidly through linking to a form where people can then enter their information and submit their contribution. Some examples of payment processors that it works well with include Givalike, Dwolla, and DonorPerfect.

You can set up the links where people should be sent to fill out their information and submit their contribution in the DonationInfo tab. See [this screenshot](https://www.dropbox.com/s/jp72o6vhs9ubikj/DonationInfo_tab.png?dl=0). You can set different urls here for generic contributions and for renewals.

### Possible Customizations

## Deploying

### Amazon Web Services

To deploy to AWS, the project uses the middleman-s3_sync gem to push and compile the site to s3 after building.

By default, in config.rb, config.after_build is set to false. Set this to true. Check that your AWS_ACCESS_KEY and AWS_ACCESS_SECRET environment variables are set, and then run:

    bundle exec middleman build

In your terminal, you should see s3_sync applying any updates to files for the project. You can also check the project s3 bucket to ensure that all files have been synced there. Change config.after_build back to its default of false after deploying.

### Heroku

If you've never used Heroku before, you'll need to [create a Heroku account](https://signup.heroku.com/dc).

Heroku deployment uses config.ru and the Rakefile. For Heroku, you'll need Ruby 2.1.4.

To create your project for Heroku, run

    heroku create

To push the project to Heroku, run

    git push heroku master

### Rsync, FTP, STFP, or Git

There's a [middleman-deploy gem](https://github.com/middleman-contrib/middleman-deploy) that can be used to deploy the project over Rsync, FTP, STFP, or Git.

## Examples

The Texas Tribune uses this project for our donations site. You can see it live [here](http://support.texastribune.org/) and visit the repo [here](https://github.com/texastribune/donations-app). This should hopefully provide a good idea of what's possible with the project and what additional customizations you can add to the project so that it fits your particular needs.

## Contributors

* [Kathryn Beaty](https://github.com/kabeaty) - [kbeaty@texastribune.org](mailto:kbeaty@texastribune.org)

Thank you to [Masonry](http://builtbymasonry.com/), the digital creative agency we worked with to reach the design for this project.

Please feel free to reach out with any questions or comments. Thanks!
