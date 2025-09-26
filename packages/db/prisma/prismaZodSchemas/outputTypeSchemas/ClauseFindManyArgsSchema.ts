import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseIncludeSchema } from '../inputTypeSchemas/ClauseIncludeSchema'
import { ClauseWhereInputSchema } from '../inputTypeSchemas/ClauseWhereInputSchema'
import { ClauseOrderByWithRelationInputSchema } from '../inputTypeSchemas/ClauseOrderByWithRelationInputSchema'
import { ClauseWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseWhereUniqueInputSchema'
import { ClauseScalarFieldEnumSchema } from '../inputTypeSchemas/ClauseScalarFieldEnumSchema'
import { AnalysisRequestArgsSchema } from "../outputTypeSchemas/AnalysisRequestArgsSchema"
import { TriggerHitFindManyArgsSchema } from "../outputTypeSchemas/TriggerHitFindManyArgsSchema"
import { ClauseCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClauseSelectSchema: z.ZodType<Prisma.ClauseSelect> = z.object({
  id: z.boolean().optional(),
  analysisRequestId: z.boolean().optional(),
  order: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  triggerWarning: z.boolean().optional(),
  severity: z.boolean().optional(),
  riskScore: z.boolean().optional(),
  categories: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  analysisRequest: z.union([z.boolean(),z.lazy(() => AnalysisRequestArgsSchema)]).optional(),
  hits: z.union([z.boolean(),z.lazy(() => TriggerHitFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClauseFindManyArgsSchema: z.ZodType<Prisma.ClauseFindManyArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: z.lazy(() => ClauseIncludeSchema).optional(),
  where: ClauseWhereInputSchema.optional(),
  orderBy: z.union([ ClauseOrderByWithRelationInputSchema.array(),ClauseOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClauseScalarFieldEnumSchema,ClauseScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseFindManyArgs>;

export default ClauseFindManyArgsSchema;
