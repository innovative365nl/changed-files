import {ICommand, File} from './command'
// GetFoldersCommand now gets the first subfolder instead of the main folder
export class GetFoldersCommand implements ICommand {
  run(files: File[]): File[] {
    return files
      .map(x => x)
      .filter(file => file.filename.includes('/'))
      .map(x => ({

        ...x,
        filename: FolderHelper(x)
      }))
  }

}
function FolderHelper(file: File): string {
    const folderName = file.filename;
    const tempName = folderName.substring(folderName.indexOf("/"+1))
    const newName = tempName.substring(0, tempName.indexOf("/")) 
    return newName
}
