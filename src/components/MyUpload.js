import React, { Component } from 'react'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import cookie from 'react-cookies'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default class MyUpload extends Component {
  state = {
    imgUrl: this.props.imgUrl ||  '',
    loading: false,
    originalname: ''
  }

  onChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
    } else if (info.file.status === 'done') {
      console.log(info);
      getBase64(info.file.originFileObj, imgUrl => {
        this.props.onChange(info.file.response.data.filename)
        message.success('图片上传成功')
        this.setState({
          loading: false,
          imgUrl,
          originalname: info.file.response.data.originalname
        })
      })
    }
  }

  render() {
    return (
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={this.props.action}
        beforeUpload={beforeUpload}
        onChange={this.onChange}
        headers={{ Authorization: `Bearer ${cookie.load('myblog_token')}` }}
      >
        {
          this.state.imgUrl
            ?
            <img src={this.state.imgUrl} alt={this.state.originalname} style={{ width: '100%' }} />
            :
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
        }
      </Upload>
    )
  }
}
