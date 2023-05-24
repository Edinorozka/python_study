import pytest

from tasks.l3 import l3

@pytest.mark.parametrize("line, res", [("to to then to the these", ('Самое длинное слово - these', 'Чаще всего, 3 раз, встретилось - to')),
                                       ("", ('Самое длинное слово - ', 'Чаще всего, 0 раз, встретилось - '))])
def test_ba_positive(line, res):
    assert l3(line) == res