import pytest

from tasks.l2 import l2

@pytest.mark.parametrize("line, res", [("sum", ('su', [], 'Длинна введённой строки = 3', 'su')),
                                       ("cat and cup", ('ca and cup', ['в строке есть символ с у него номер 1', 'в строке есть символ с у него номер 9'], 'Длинна введённой строки = 11', 'cat and cu')),
                                       ("", ('', [], 'Длинна введённой строки = 0', ''))])
def test_ba_positive(line, res):
    assert l2(line) == res