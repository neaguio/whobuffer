function getFileType(buffer: Buffer): string | null {
  const signature = buffer.slice(0, 4).toString('hex')
  switch (signature) {
    case '89504e47':
      return 'png'
    case '47494638':
      return 'gif'
    case 'ffd8ffe0':
    case 'ffd8ffe1':
    case 'ffd8ffe2':
      return 'jpg'
    case '52494646': {
      const format = buffer.slice(8, 12).toString('hex')
      if (format === '57454250' || format === '57454250') {
        return 'webp'
      }
      break
    }
  }
  switch (signature.slice(0, 4)) {
    case '424d':
      if (buffer.readUInt16LE(0) === 0x4d42) {
        return 'bmp'
      }
      break
    case '4949':
    case '4d4d': {
      const tiffSignature = buffer.slice(2, 4).toString('hex')
      if (tiffSignature === '002a' || tiffSignature === '2a00') {
        return 'tiff'
      }
    }
  }

  return null
}

export default getFileType
