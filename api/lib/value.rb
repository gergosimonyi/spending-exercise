# Converts a (currency, amount) tuple into a made-up number. Useful for
# roughly comparing different currencies without pretending to be an exchange.

# Tip: you can, and should, think of this as an equivalent value for your money
# in number of cookies. Unless the number is very low. Then you should think of
# it as the number of cookies left after you raided the pantry.

def currency_to_value(currency, amount)
  case currency
  when 'USD'
    528 * amount
  when 'HUF'
    1.39 * amount
  else
    raise "Currency #{currency} is not implemented."
  end
end
