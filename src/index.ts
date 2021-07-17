import fs from 'fs-extra';
import handlebars from 'handlebars';
import recursive from 'recursive-readdir';
import micromatch from 'micromatch';

interface IOption {
  include?: string[];
  exclude?: string[];
}

const compiler = async <TMeta>(
  meta: TMeta,
  rootDir: string,
  option: IOption = {}
): Promise<void> => {
  const { include, exclude } = option;
  const files = await recursive(rootDir);
  files.forEach(file => {
    const isInclude = (include && micromatch.isMatch(file, include)) || !include;
    const isExclude = exclude && micromatch.isMatch(file, exclude);
    if (isExclude) {
      return;
    }
    if (isInclude) {
      const content = fs.readFileSync(file).toString();
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(file, result);
    }
  });
};

export = compiler;
