# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_js-fixture-example_session',
  :secret      => 'cf5eb183ac186c0213b22faa40ec6588d9ae64c2be5a00b51bea2c02d3f9a4256cf113f4d22bea78b45ef582b1718083a571842480e6f33151de9e1850e29d72'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
