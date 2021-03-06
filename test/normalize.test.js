import test from 'ava';

import BemEntity from '../index';

test('should normalize boolean modifier', t => {
    const entity = new BemEntity({ block: 'block', mod: { name: 'mod' } });

    t.true(entity.mod.val);
});

test('should normalize short entry for boolean modifier', t => {
    const entity = new BemEntity({ block: 'block', mod: 'mod' });

    t.true(entity.mod.val);
});

test('should support `modName` and `modVal` fields', t => {
    const entity = new BemEntity({ block: 'block', modName: 'mod', modVal: 'val' });

    t.same(entity.mod, { name: 'mod', val: 'val' });
});

test('should use `mod.name` field instead of `modName`', t => {
    const entity = new BemEntity({ block: 'block', mod: { name: 'mod1' }, modName: 'mod2' });

    t.is(entity.mod.name, 'mod1');
});

test('should use `mod.val` field instead of `modVal`', t => {
    const entity = new BemEntity({ block: 'block', mod: { name: 'mod', val: 'val1' }, modVal: 'val2' });

    t.is(entity.mod.val, 'val1');
});
