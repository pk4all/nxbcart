import { Uploader } from 'rsuite';
import 'rsuite/Uploader/styles/index.css';
const ImageUpload = () => {
    return (
        <>
             <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Upload Product Images</h5>
                    </div>

                    <form className="theme-form theme-form-2 mega-form">
                        <div className="mb-4 row align-items-center">
                            <label
                                className="col-sm-3 col-form-label form-label-title">Images</label>
                            <div className="col-sm-9">
                                <Uploader multiple listType="picture" action='/upload'>
                                    <button>
                                        <i className='fa fa-image'></i>
                                    </button>
                                </Uploader>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
  };

  export default ImageUpload;