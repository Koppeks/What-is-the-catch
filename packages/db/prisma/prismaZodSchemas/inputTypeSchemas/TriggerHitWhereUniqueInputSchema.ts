import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitClauseIdTriggerIdCompoundUniqueInputSchema } from './TriggerHitClauseIdTriggerIdCompoundUniqueInputSchema';
import { TriggerHitWhereInputSchema } from './TriggerHitWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { ClauseScalarRelationFilterSchema } from './ClauseScalarRelationFilterSchema';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';
import { TriggerScalarRelationFilterSchema } from './TriggerScalarRelationFilterSchema';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';

export const TriggerHitWhereUniqueInputSchema: z.ZodType<Prisma.TriggerHitWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    clauseId_triggerId: z.lazy(() => TriggerHitClauseIdTriggerIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    clauseId_triggerId: z.lazy(() => TriggerHitClauseIdTriggerIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  clauseId_triggerId: z.lazy(() => TriggerHitClauseIdTriggerIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TriggerHitWhereInputSchema),z.lazy(() => TriggerHitWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TriggerHitWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TriggerHitWhereInputSchema),z.lazy(() => TriggerHitWhereInputSchema).array() ]).optional(),
  clauseId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  triggerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  confidence: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  matches: z.lazy(() => JsonNullableFilterSchema).optional(),
  clause: z.union([ z.lazy(() => ClauseScalarRelationFilterSchema),z.lazy(() => ClauseWhereInputSchema) ]).optional(),
  trigger: z.union([ z.lazy(() => TriggerScalarRelationFilterSchema),z.lazy(() => TriggerWhereInputSchema) ]).optional(),
}).strict()) as z.ZodType<Prisma.TriggerHitWhereUniqueInput>;

export default TriggerHitWhereUniqueInputSchema;
