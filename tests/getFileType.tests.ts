import fs from 'fs'
import getFileType from '../src/getFileType'
import path from 'path'

const filePath = path.join(__dirname, 'samples')
const filePathWithoutExtension = path.join(__dirname, 'samples_without_extension')

describe('getFileType', () => {
  it('should return "png" for a PNG file', () => {
    const buffer = fs.readFileSync(path.join(filePath, 'sample.png'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('png')
  })

  it('should return "png" for an unknown file', () => {
    const buffer = fs.readFileSync(path.join(filePathWithoutExtension, 'png'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('png')
  })

  it('should return "gif" for a GIF file', () => {
    const buffer = fs.readFileSync(path.join(filePath, 'sample_640×426.gif'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('gif')
  })
  it('should return "gif" for an unknown file.', () => {
    const buffer = fs.readFileSync(path.join(filePathWithoutExtension, 'gif'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('gif')
  })

  it('should return "jpg" for a JPEG file', () => {
    const buffer = fs.readFileSync(path.join(filePath, 'sample_640×426.jpg'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('jpg')
  })

  it('should return "jpg" for an unknown file.', () => {
    const buffer = fs.readFileSync(path.join(filePathWithoutExtension, 'jpg'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('jpg')
  })

  it('should return "webp" for a WEBP file', () => {
    const buffer = fs.readFileSync(path.join(filePath, 'sample.webp'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('webp')
  })

  it('should return "webp" for an unknown file.', () => {
    const buffer = fs.readFileSync(path.join(filePathWithoutExtension, 'webp'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('webp')
  })

  it('should return "bmp" for a BMP file', () => {
    const buffer = fs.readFileSync(path.join(filePath, 'sample_640×426.bmp'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('bmp')
  })

  it('should return "bmp" for an unknown file.', () => {
    const buffer = fs.readFileSync(path.join(filePathWithoutExtension, 'bmp'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('bmp')
  })

  it('should return "bmp" for a BMP file', () => {
    const buffer = fs.readFileSync(path.join(filePath, 'sample_1280×853.bmp'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('bmp')
  })

  it('should return "bmp" for an unknown file (2).', () => {
    const buffer = fs.readFileSync(path.join(filePathWithoutExtension, 'bmp2'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('bmp')
  })

  it('should return "tiff" for a TIFF file', () => {
    const buffer = fs.readFileSync(path.join(filePath, 'sample_640×426.tiff'))
    console.log(buffer)
    const fileType = getFileType(buffer)
    expect(fileType).toBe('tiff')
  })

  it('should return "tiff" for an unknown file.', () => {
    const buffer = fs.readFileSync(path.join(filePathWithoutExtension, 'tiff'))
    const fileType = getFileType(buffer)
    expect(fileType).toBe('tiff')
  })

  it('should return null for an unsupported file type', () => {
    const buffer = fs.readFileSync(path.join(filePath, 'sample.txt'))
    const fileType = getFileType(buffer)
    expect(fileType).toBeNull()
  })

  it('should return "null" for an unknown file.', () => {
    const buffer = fs.readFileSync(path.join(filePathWithoutExtension, 'txt'))
    const fileType = getFileType(buffer)
    expect(fileType).toBeNull()
  })
})
