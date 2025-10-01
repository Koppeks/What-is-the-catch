import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseIncludeSchema } from '../inputTypeSchemas/ClauseIncludeSchema'
import { ClauseWhereInputSchema } from '../inputTypeSchemas/ClauseWhereInputSchema'
import { ClauseOrderByWithRelationInputSchema } from '../inputTypeSchemas/ClauseOrderByWithRelationInputSchema'
import { ClauseWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseWhereUniqueInputSchema'
import { ClauseScalarFieldEnumSchema } from '../inputTypeSchemas/ClauseScalarFieldEnumSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { ClauseArgsSchema } from "../outputTypeSchemas/ClauseArgsSchema"
import { ClauseFindManyArgsSchema } from "../outputTypeSchemas/ClauseFindManyArgsSchema"
import { TriggerHitFindManyArgsSchema } from "../outputTypeSchemas/TriggerHitFindManyArgsSchema"
import { ClauseAnalysisFindManyArgsSchema } from "../outputTypeSchemas/ClauseAnalysisFindManyArgsSchema"
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
  TriggerHits: z.union([z.boolean(),z.lazy(() => TriggerHitFindManyArgsSchema)]).optional(),
  ClauseAnalysis: z.union([z.boolean(),z.lazy(() => ClauseAnalysisFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClauseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClauseFindFirstOrThrowArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: z.lazy(() => ClauseIncludeSchema).optional(),
  where: ClauseWhereInputSchema.optional(),
  orderBy: z.union([ ClauseOrderByWithRelationInputSchema.array(),ClauseOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClauseScalarFieldEnumSchema,ClauseScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseFindFirstOrThrowArgs>;

export default ClauseFindFirstOrThrowArgsSchema;
