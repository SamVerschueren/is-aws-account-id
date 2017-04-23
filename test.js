import test from 'ava';
import m from '.';

test(t => {
	t.false(m('abc'));
	t.false(m(1));
	t.false(m(true));
	t.false(m(undefined));
	t.false(m(null));
	t.false(m('1234567890123'));
	t.false(m('123456789012a'));
	t.false(m('a123456789012'));
	t.true(m('123456789012'));
});
