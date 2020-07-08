import axios from 'axios'

export default function (req, res) {
  axios
    .get('https://pastebin.com/raw/p7LSLudj')
    .then((result) => res.status(200).send(result.data))
}
