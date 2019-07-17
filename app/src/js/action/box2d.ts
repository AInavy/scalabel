import * as labels from '../common/label_types'
import { makeLabel, makeRect } from '../functional/states'
import * as actions from './common'
import { AddLabelAction } from './types'

/**
 * Create AddLabelAction to create a box2d label
 * @param {number} itemIndex
 * @param {number[]} category: list of category ids
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @return {AddLabelAction}
 */
export function addBox2dLabel (
  itemIndex: number, category: number[],
  x: number, y: number, w: number, h: number): AddLabelAction {
  // create the rect object
  const rect = makeRect({ x, y, w, h })
  const label = makeLabel({ type: labels.BOX_2D, category })
  return actions.addLabel(itemIndex, label, [rect])
}