# Donation Builder

You can also read the Donation Builder docs [here](http://donation-builder.readthedocs.org/en/latest/).

## About the Project

Donation Builder is a framework to help organizations showcase their work and seek new members and support for funding their projects. The primary audience for this project is nonprofit organizations with small teams who want a better and quick-to-set-up way to inform potential new members and supporters about their mission and work, as well as easily lead them through the donation process.

### Why We Built It this Way

We chose Middleman for the project because we wanted a mostly static site. The [Google Drive gem for Middleman](https://github.com/voxmedia/middleman-google_drive) provides the ability to easily update the content on the site without touching the code once it's set up, for those elements that are dynamic.

## Features

* Fully responsive framework ready to be customized with an organization's visual brand, including images, colors, and fonts
* Ability to load information from Google Spreadsheets, so that non-technical members of your team can update membership levels and benefits, contact information, organization information, social share messages, content to highlight, and more
* Easily integrated with your Google Analytics account
* Ability to hook up to a variety of payment processors, including Dwolla, Givalike, and DonorPerfect, to accept the donations
* Ability to deploy through Amazon Web Services or Heroku

## Support

* Chrome, Firefox, Safari, IE9+
* Users with JavaScript disabled
* Tested with [Browserstack](https://www.browserstack.com/) across a variety of devices

## Getting Started

To get started, clone down the project repo.

If you don't already have Ruby installed, you need to [install it](https://www.ruby-lang.org/en/documentation/installation/). You need Ruby version 2.1.4, which is specified in the .ruby-version file. One way to manage your Ruby versions is to use [rbenv](https://github.com/sstephenson/rbenv).

You need the Ruby gem bundler. If you need to install the bundler, run:

    gem install bundler

Install the necessary gems from the Gemfile by running:

    bundle install

## Development

If you've never worked with Middleman before, you can check out the docs [here](https://middlemanapp.com/basics/install/).

Middleman is configured to live reload the project in the browser as changes are made to files. To start up the Middleman server, run:

    bundle exec middleman

To build the site, run:

    bundle exec middleman build

When Middleman builds, it creates a static file for each file located in the source folder. The build process is configured in config.rb.

## Integrating with Google Drive

Donation Builder uses the [middleman-google_drive gem](https://github.com/voxmedia/middleman-google_drive) to integrate with Google Drive. Configure your Google Docs authentication as detailed in the [Setup section](https://github.com/voxmedia/middleman-google_drive#setup).

The project is set up so that the site can be updated and customized through Google Spreadsheets. Use the same setup for your Google Spreadsheets to correctly pull in the info. You can view the spreadsheet setup [here](https://docs.google.com/spreadsheets/d/1GhhJ0nC35YAH21Dyt6U7tGBYqbP45CWdm1Ui1ReAfeE/pubhtml).

## Analytics

You can hook up the project to your Google Analytics account to track how people are interacting with the site. In the Google Spreadsheet, you should have an Analytics tab. Look for the column labeled 'google_analytics_id', and enter your Google Analytics ID here. A second column labeled 'google_analytics_domain'  is where you should enter your domain.

See [this screenshot](https://www.dropbox.com/s/jwi7u4vdls9wao9/Analytics_tab.png?dl=0).

## Visual Customization

### Brand Colors

Donation Builder uses Sass to write its styles. In _settings.scss, there are some color variables. The project uses three theme colors, a main theme color, a secondary theme color, and a tertiary theme color. These colors are then applied to the buttons, navigation links, labels, and other UI elements throughout the project to quickly and easily use your organization's colors.

### Typography

You can customize the site with the fonts your organization already uses. This can also be done in the _settings.scss file. Look for the variables $main-font and $secondary-font. The default main font is 'Roboto' with a sans-serif fallback; the default secondary font is 'Open Sans Condensed', which has another sans-serif font as a fallback.

### Images

To switch out most images, you can replace an image in the /source/images folder that corresponds to the image you'd like to change. These images are named in an intuitive manner so that it's clear where each image appears in the project. The images and where they appear are described below in case the names are not clear. If you still aren't sure, try switching out the image and see where it appears in the project.

#### Logo

Your organization's logo appears in the masthead of each page on the site. The logo should be approximately 300px wide and 60px tall. In the source/images/ folder is an image named logo.png. Replace this image with your logo.

#### Favicon

You may want to customize the favicon that appears on the browser tab. To do this, replace the image called favicon.ico with your favicon.

#### Banner Backgrounds

You can customize the backgrounds used for the banners at the top of each page with your organization's photos. To set a background for the landing page banner, replace the photo named landing-header-bg.jpg. To set a background for the premium membership page banner, replace the photo named premium-membership-banner.jpg.

### Organization Info

In the AboutOrg tab of the Google Spreadsheet, you can set up the summary for your organization, a short tagline, a call-to-action, your organization's name, and the url for your organization.

### Contact Information

Contact information letting people know who to contact with questions can also be configured in the Google Spreadsheet, under the Contacts tab. You can set department, name, title, phone, and email for each contact.

### Membership Levels

You can set up your organization's membership level names, donation amounts and benefits in the Google Spreadsheet. You do this on the MemberLevels tab. See [this screenshot](https://www.dropbox.com/s/m80bmqczm5znty4/MemberLevels_tab.png?dl=0).

#### name

This field is your membership level name. For example, "Activist" or "Enthusiast".

#### donation_amount

This is the donation amount that people should give to be at the membership level. Add the amounts without dollar signs. For amounts over 999, include the comma (for example, 1,000).

#### most_popular

Set this to TRUE for your most popular membership level, and leave this field blank for all other levels. This activates a "Most Popular" flag when this level is displayed on the landing page and on the membership grid page.

#### premium_member

Set this to TRUE for any premium membership levels that your organization offers. This activates a "Premium Member" flag when this level is displayed on the landing page and on the membership grid page. It also tells the project to feature these premium membership levels on the premium membership page.

#### benefits

You can list the benefits for each membership level here. Between each benefit, include &lt;br&gt; to put in a line break. You may also want to include "Plus all above benefits" as one of the benefits in this field.

## Customizing Content 

On both the landing page and the premium membership page, there are four spots provided for you to showcase either images or videos to inform people what their donations will go toward supporting. You set them in the Showcase tab. See [this screenshot](https://www.dropbox.com/s/7av2y8xu5oaq8ea/Showcase_tab.png?dl=0). To showcase images, enter 'images' in the 'content_type' column, and to showcase videos, enter 'videos' in the 'content_type' column.

If you selected images, upload the images of your choice and name them "image-one.pg" (This is the top featured image), "image-two.png", "image-three.png", and "image-four.png". 

If you selected videos, upload the videos of your choice and name them "video-one.pg" (This is the top featured video), "video-two.png", "video-three.png", and "video-four.png". You'll also need to set the Youtube link for your videos in the Showcase tab under "video_one", "video_two", "video_three", and "video_four". 

Labels for the images or videos can be set in the spreadsheet with the columns "label_one", "label_two", "label_three", and "label_four".

## Page Information

You can set your page titles, headers, and urls in the Pages tab of the Google Spreadsheet.

## Navigation Links

You can add more navigation links to the navbar as needed. These links are included in both the desktop nav and the mobile nav. For example, you might want to add a "Quick Donation" link or a link to more information about your organization. Additional nav links can be set up in the NavLinks tab. For each additional nav link, add the URL target and the link text to display. It's recommended that you add only up to three additional nav links so you don't overwhelm the page.

## Footer Links

You can set up the links that should appear in the footer in the FooterLinks tab. For each link you'd like to include in the footer, add the URL and the link text to display. Note that the project is configured to hide the footer by default if the device width is 985px or greater. You can change this in the _footer.scss file if you prefer a different behavior here.

## Social Sharing

You can customize the default messages for when people choose to email, tweet or post to Facebook about donating to your organization. You configure this in Google Spreadsheets on the Social tab. See [this screenshot](https://www.dropbox.com/s/8gjs5vksc7b0wmj/Social_tab.png?dl=0). The Facebook fields set the [Open Graph](http://ogp.me/) metadata for your site, to ensure Facebook scrapes and displays the information you want when people post.

To set your Facebook share image, you also need to include the image you'd like to use there in the /source/images folder named facebook-share-image.png.

## Integrating with a Payment Processor

The project is designed to be able to be integrated with the payment processor that works best for you. It's set up to integrate most fluidly through linking to a form where people can then enter their information and submit their contribution. Some examples of payment processors with which it works well include Givalike, Dwolla and DonorPerfect.

You can set up the links where people should be sent to enter their information and submit their contribution in the DonationInfo tab. See [this screenshot](https://www.dropbox.com/s/jp72o6vhs9ubikj/DonationInfo_tab.png?dl=0). You can set different URLs here for generic contributions and for renewals.

### Possible Customizations

Coming soon!

## Deploying

### Amazon Web Services

To deploy to AWS, the project uses the middleman-s3_sync gem to push and compile the site to Amazon S3 after building.

In the config.rb file, look for "activate :s3_sync do |config|". Set config.bucket to your AWS bucket. Set config.region to your AWS bucket region. Set your AWS_ACCESS_KEY and your AWS_ACCESS_SECRET as environment variables.

By default, in config.rb, config.after_build is set to false. When you're ready to deploy, set this to true. Check that your AWS_ACCESS_KEY and AWS_ACCESS_SECRET environment variables are set, and then run:

    bundle exec middleman build

In your terminal, you should see s3_sync applying any updates to the files in the project. You can also check the project S3 bucket to ensure that all files have been synced there. Change config.after_build back to its default of false after deploying.

### Heroku

If you've never used Heroku before, you'll need to [create a Heroku account](https://signup.heroku.com/dc).

For Heroku, you'll need Ruby 2.1.4.

The first time you deploy, create your project for Heroku:

    heroku create

Build the project locally and commit the updates:

    bundle exec middleman build

Heroku is set up in config.ru to use the build directory.

Push the project to Heroku:

    git push heroku master

To see your deployed project:

    heroku open

### Rsync, FTP, SFTP and Git

You can use a [middleman-deploy gem](https://github.com/middleman-contrib/middleman-deploy) to deploy the project over Rsync, FTP, SFTP or Git.

## Examples

The Texas Tribune uses this project for its donations site. You can see it live [here](http://support.texastribune.org/) and visit the repo [here](https://github.com/texastribune/donations-app). This should give you a good idea of what's possible with the project and what additional customizations you can add to the project so that it fits your particular needs.

Look at the example project on Heroku [here](https://donation-builder.herokuapp.com/).

## Contributors

* [Kathryn Beaty](https://github.com/kabeaty) - [kbeaty@texastribune.org](mailto:kbeaty@texastribune.org)

Thank you to [Masonry](http://builtbymasonry.com/), the digital creative agency we worked with to reach the design for this project.

Please feel free to reach out with any questions or comments. Thanks!
