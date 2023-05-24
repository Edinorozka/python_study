import pytest

from tasks.l1 import l1

@pytest.mark.parametrize("a, b", [(5, 4), (10, 6), (-5, -7), (3.2, 3)])
def test_ba_positive(a, b):
    test_date = "Число " + str(a) + " больше " + str(b)
    assert test_date == l1(a, b)

@pytest.mark.parametrize("a, b", [(4, 5), (6, 10), (-5, 7), (3.2, 3.97)])
def test_ab_positive(a, b):
    test_date = "Число " + str(b) + " больше " + str(a)
    assert test_date == l1(a, b)

@pytest.mark.parametrize("a, b", [(3, 1), (9, 3)])
def test_a3b_positive(a, b):
    test_date = "Число " + str(a) + " более чем в три раза больше чем " + str(b)
    assert test_date == l1(a, b)


def test_aabb_positive():
    test_date = "Числа равны"
    assert test_date == l1(3, 3)

@pytest.mark.parametrize("exepted, a, b", [((TypeError), 3, 'g')])
def test_negative(exepted, a, b):
    with pytest.raises(exepted):
        l1(a, b)
