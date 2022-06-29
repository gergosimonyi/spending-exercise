# We store data to arbitrary precision, but currently present it in IEEE 754
# double-precision binary floating-point format.
#
# This is done to spare the front-end from unexpectedly receiving strings.

class BigDecimal
  def as_json(options=nil)
    to_f
  end
end
