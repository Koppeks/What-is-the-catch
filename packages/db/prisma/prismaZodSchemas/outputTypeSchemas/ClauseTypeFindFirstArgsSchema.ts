import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeIncludeSchema } from '../inputTypeSchemas/ClauseTypeIncludeSchema'
import { ClauseTypeWhereInputSchema } from '../inputTypeSchemas/ClauseTypeWhereInputSchema'
import { ClauseTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/ClauseTypeOrderByWithRelationInputSchema'
import { ClauseTypeWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseTypeWhereUniqueInputSchema'
import { ClauseTypeScalarFieldEnumSchema } from '../inputTypeSchemas/ClauseTypeScalarFieldEnumSchema'
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { ClauseTypeCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseTypeCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClauseTypeSelectSchema: z.ZodType<Prisma.ClauseTypeSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  version: z.boolean().optional(),
  defaultScoring: z.boolean().optional(),
  label: z.boolean().optional(),
  isActive: z.boolean().optional(),
  triggerInstruction: z.boolean().optional(),
  triggerKeywords: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Trigger: z.union([z.boolean(),z.lazy(() => TriggerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClauseTypeFindFirstArgsSchema: z.ZodType<Prisma.ClauseTypeFindFirstArgs> = z.object({
  select: ClauseTypeSelectSchema.optional(),
  include: z.lazy(() => ClauseTypeIncludeSchema).optional(),
  where: ClauseTypeWhereInputSchema.optional(),
  orderBy: z.union([ ClauseTypeOrderByWithRelationInputSchema.array(),ClauseTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClauseTypeScalarFieldEnumSchema,ClauseTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseTypeFindFirstArgs>;

export default ClauseTypeFindFirstArgsSchema;
