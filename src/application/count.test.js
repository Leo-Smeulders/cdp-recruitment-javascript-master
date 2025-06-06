const { describe, expect, it } = require('@jest/globals')
const { animalsCount, peoplesCount, countFilteredAnimals } = require('./count')

describe('animalsCount', () => {
  const person = {
    name: 'Winifred Graham',
    animals: [
      { name: 'Anoa' },
      { name: 'Crow' }
    ]
  }

  const expectedResult = {
    name: 'Winifred Graham [2]',
    animals: [
      { name: 'Anoa' },
      { name: 'Crow' }
    ]
  }

  it('should add the count of animals to the name of the person', () => {
    expect(animalsCount(person)).toStrictEqual(expectedResult)
  })
})

describe('peopleCount', () => {
  const country = {
    name: 'Dillauti',
    people: [
      {
        name: 'Winifred Graham',
        animals: [
          { name: 'Anoa' },
          { name: 'Crow' }
        ]
      },
      {
        name: 'Blanche Viciani',
        animals: [
          { name: 'Deer Mouse' }
        ]
      }
    ]
  }

  const expectedResult = {
    name: 'Dillauti [2]',
    people: [
      {
        name: 'Winifred Graham [2]',
        animals: [
          { name: 'Anoa' },
          { name: 'Crow' }
        ]
      },
      {
        name: 'Blanche Viciani [1]',
        animals: [
          { name: 'Deer Mouse' }
        ]
      }
    ]
  }

  it('should add the count of animals to the name of the person and the count of people to the country', () => {
    expect(peoplesCount(country)).toStrictEqual(expectedResult)
  })
})