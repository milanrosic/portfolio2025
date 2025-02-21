import sympy as sp

# Define variable and function
x = sp.Symbol('x', real=True, nonnegative=True)
p_a = (1/3) * x**3

# Compute integral
integral_a = sp.integrate(p_a, (x, 0, 1))

# Check if it sums to 1
print("Integral result (should be 1 for a valid pdf):", integral_a)
