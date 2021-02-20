import {extract, insertUrlParams} from "@/js/utils/general/general";

describe('extract function', () => {
  const src = {
    user: {
      name: "John"
    }
  };
  it('It should properly extract property present in object', () => {
    const result = extract(src, ["user", "name"]);
    expect(result).toEqual("John");
  });

  it('It should return default value if path doesnt exist', () => {
    const result = extract(src, ["user", "data", "birth", "day"]);
    expect(result).toEqual(null);
  });

  it('It should return default value if applied to null', () => {
    const result = extract(null, ['any', 'path'], "not found!");
    expect(result).toEqual("not found!");
  })
});

describe('insertUrlParams function', () => {
  it('should replace one param correctly', () => {
    const result = insertUrlParams('url/:id', ['12']);
    expect(result).toEqual('url/12');
  });
  it('should replace multiple params correctly', () => {
    const result = insertUrlParams('/url/:id1/instances/:id2', ['abc', 'def']);
    expect(result).toEqual('/url/abc/instances/def');
  })
});