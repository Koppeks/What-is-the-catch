import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseIncludeSchema } from '../inputTypeSchemas/ClauseIncludeSchema'
import { ClauseWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseWhereUniqueInputSchema'
import { ClauseCreateInputSchema } from '../inputTypeSchemas/ClauseCreateInputSchema'
import { ClauseUncheckedCreateInputSchema } from '../inputTypeSchemas/ClauseUncheckedCreateInputSchema'
import { ClauseUpdateInputSchema } from '../inputTypeSchemas/ClauseUpdateInputSchema'
import { ClauseUncheckedUpdateInputSchema } from '../inputTypeSchemas/ClauseUncheckedUpdateInputSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { ClauseArgsSchema } from "../outputTypeSchemas/ClauseArgsSchema"
import { ClauseFindManyArgsSchema } from "../outputTypeSchemas/ClauseFindManyArgsSchema"
import { ClauseCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClauseSelectSchema: z.ZodType<Prisma.ClauseSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  parentId: z.boolean().optional(),
  ordinalPath: z.boolean().optional(),
  title: z.boolean().optional(),
  text: z.boolean().optional(),
  order: z.boolean().optional(),
  depth: z.boolean().optional(),
  meta: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => ClauseArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => ClauseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClauseUpsertArgsSchema: z.ZodType<Prisma.ClauseUpsertArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: z.lazy(() => ClauseIncludeSchema).optional(),
  where: ClauseWhereUniqueInputSchema, 
  create: z.union([ ClauseCreateInputSchema, ClauseUncheckedCreateInputSchema ]),
  update: z.union([ ClauseUpdateInputSchema, ClauseUncheckedUpdateInputSchema ]),
}).strict();

export default ClauseUpsertArgsSchema;
