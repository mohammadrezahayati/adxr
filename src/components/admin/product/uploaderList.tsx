import { useState, type FC } from 'react';
import { faker } from '@faker-js/faker';
import Pagination from '../common/pagination';
import Table from '../common/table';
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface uploaderListProps {}
interface UploaderListType {
  image: string;
  fullName: string;
  country: string;
  company: string;
  jobTitle: string;
  jobType: string;
}

export function createRandomUploaderList(): UploaderListType {
  return {
    image: faker.image.avatar(),
    fullName: faker.person.fullName(),
    country: faker.location.country(),
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    jobType: faker.person.jobType(),
  };
}

export const uploaderList: UploaderListType[] = faker.helpers.multiple(
  createRandomUploaderList,
  {
    count: 40,
  }
);
const UploaderList: FC<uploaderListProps> = ({}) => {
  const [files, setFiles] = useState([]);
  const title = [' ', 'Name', 'Job', 'Favorite Color', ' '];
  return (
    <div className='tableContactHeight flex gap-4 flex-col'>
      <div className='App'>
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={3}
          server='/api'
          name='files'
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </div>
      <Table data={uploaderList} title={title} />
      <Pagination />
    </div>
  );
};
export default UploaderList;
