import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerIncludeSchema } from '../inputTypeSchemas/TriggerIncludeSchema'
import { TriggerWhereUniqueInputSchema } from '../inputTypeSchemas/TriggerWhereUniqueInputSchema'
import { TriggerCreateInputSchema } from '../inputTypeSchemas/TriggerCreateInputSchema'
import { TriggerUncheckedCreateInputSchema } from '../inputTypeSchemas/TriggerUncheckedCreateInputSchema'
import { TriggerUpdateInputSchema } from '../inputTypeSchemas/TriggerUpdateInputSchema'
import { TriggerUncheckedUpdateInputSchema } from '../inputTypeSchemas/TriggerUncheckedUpdateInputSchema'
import { TriggerArgsSchema } from "../outputTypeSchemas/TriggerArgsSchema"
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { ClauseCategoryArgsSchema } from "../outputTypeSchemas/ClauseCategoryArgsSchema"
import { DocumentTriggerFindManyArgsSchema } from "../outputTypeSchemas/DocumentTriggerFindManyArgsSchema"
import { TriggerCountOutputTypeArgsSchema } from "../outputTypeSchemas/TriggerCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TriggerSelectSchema: z.ZodType<Prisma.TriggerSelect> = z.object({
  id: z.boolean().optional(),
  key: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
  patterns: z.boolean().optional(),
  source: z.boolean().optional(),
  state: z.boolean().optional(),
  mergedIntoId: z.boolean().optional(),
  reviewNotes: z.boolean().optional(),
  promotedAt: z.boolean().optional(),
  clauseCategoryId: z.boolean().optional(),
  defaultSeverity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mergedInto: z.union([z.boolean(),z.lazy(() => TriggerArgsSchema)]).optional(),
  mergeFrom: z.union([z.boolean(),z.lazy(() => TriggerFindManyArgsSchema)]).optional(),
  clauseCategory: z.union([z.boolean(),z.lazy(() => ClauseCategoryArgsSchema)]).optional(),
  documentRules: z.union([z.boolean(),z.lazy(() => DocumentTriggerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TriggerCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TriggerUpsertArgsSchema: z.ZodType<Prisma.TriggerUpsertArgs> = z.object({
  select: TriggerSelectSchema.optional(),
  include: z.lazy(() => TriggerIncludeSchema).optional(),
  where: TriggerWhereUniqueInputSchema, 
  create: z.union([ TriggerCreateInputSchema, TriggerUncheckedCreateInputSchema ]),
  update: z.union([ TriggerUpdateInputSchema, TriggerUncheckedUpdateInputSchema ]),
}).strict();

export default TriggerUpsertArgsSchema;
