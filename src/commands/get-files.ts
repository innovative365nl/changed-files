import { ICommand, File } from './command';

export class GetFilesCommand implements ICommand {
  run(files: File[]): File[] {
    return files
        .map(x => x)
        .filter(file => file.filename.includes("/"))
        .map(x => ({ filename: x.filename.substring(0, 1)
        }))
  }
}