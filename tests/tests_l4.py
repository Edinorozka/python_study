import pytest

from tasks.l4 import l4

@pytest.mark.parametrize("sym, a, b, res", [("+", 5, 4, 9), ("-", 10, 6, 4), ("/", -6, -3, 2), ("*", 3, 3, 9), ("^", 4, 2, 16),
                                            ("abs", -5, 1, 5), ("f", 3, 1, 6), ("acos", 1, 0, 0)])
def test_ba_positive(sym, a, b, res):
    assert l4(sym, a, b) == res

@pytest.mark.parametrize("exepted, sym, a, b", [((TypeError), "+", 3, 'g'), ((ZeroDivisionError), "/", 3, 0), ((ValueError), "f", -3, 1)])
def test_negative(exepted, sym, a, b):
    with pytest.raises(exepted):
        l4(sym, a, b)