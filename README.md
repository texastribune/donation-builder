# Donation Builder

## About the Project

Donation Builder is a framework to help organizations showcase their work and seek new members and support for funding their projects. The primary audience for this project is nonprofit organizations with small teams who want a better and quick-to-setup way to inform potential new members and supporters about their mission and work, as well as easily lead them through the donation process.

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

If you don't already have Ruby installed, you'll need to [install it](https://www.ruby-lang.org/en/documentation/installation/). The version of Ruby you'll need is 2.1.0, which is specified in the .ruby-version file.

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

## Visual Customization

## Content Customization

## Integrating with a Payment Processor

## Deploying

### Amazon Web Services

To deploy to AWS, the project uses the middleman-s3_sync gem to push and compile the site to s3 after building.

By default, in config.rb, config.after_build is set to false. Set this to true. Check that your AWS_ACCESS_KEY and AWS_ACCESS_SECRET environment variables are set, and then run:

    bundle exec middleman build

In your terminal, you should see s3_sync applying any updates to files for the project. You can also check the project s3 bucket to ensure that all files have been synced there. Change config.after_build back to its default of false after deploying.

### Heroku

## Examples

The Texas Tribune uses this project for our donations site. You can see it live [here](http://support.texastribune.org/) and visit the repo [here](https://github.com/texastribune/donations-app).

## Contributors
