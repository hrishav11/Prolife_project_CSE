const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'name of patient',
    position: 'course taken',
    photo:
      'https://randomuser.me/api/portraits/women/60.jpg',
    text:
      "Placeholder for review, add patient review here",
  },
  {
    name: 'name of patient',
    position: 'course taken',
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    text:
      'Placeholder for review, add patient review here',
  },
  {
    name: 'name of patient',
    position: 'course taken',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    text:
      "Placeholder for review, add patient review here",
  },
  {
    name: 'name of patient',
    position: 'course taken',
    photo: 'https://randomuser.me/api/portraits/men/60.jpg',
    text:
      "Placeholder for review, add patient review here",
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
