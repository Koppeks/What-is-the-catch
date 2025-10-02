import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryIncludeSchema } from '../inputTypeSchemas/ClauseCategoryIncludeSchema'
import { ClauseCategoryWhereInputSchema } from '../inputTypeSchemas/ClauseCategoryWhereInputSchema'
import { ClauseCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/ClauseCategoryOrderByWithRelationInputSchema'
import { ClauseCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseCategoryWhereUniqueInputSchema'
import { ClauseCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/ClauseCategoryScalarFieldEnumSchema'
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { CategoryHitFindManyArgsSchema } from "../outputTypeSchemas/CategoryHitFindManyArgsSchema"
import { ClauseCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseCategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClauseCategorySelectSchema: z.ZodType<Prisma.ClauseCategorySelect> = z.object({
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
  CategoryHit: z.union([z.boolean(),z.lazy(() => CategoryHitFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClauseCategoryFindFirstArgsSchema: z.ZodType<Prisma.ClauseCategoryFindFirstArgs> = z.object({
  select: ClauseCategorySelectSchema.optional(),
  include: z.lazy(() => ClauseCategoryIncludeSchema).optional(),
  where: ClauseCategoryWhereInputSchema.optional(), 
  orderBy: z.union([ ClauseCategoryOrderByWithRelationInputSchema.array(), ClauseCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseCategoryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClauseCategoryScalarFieldEnumSchema, ClauseCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ClauseCategoryFindFirstArgsSchema;
