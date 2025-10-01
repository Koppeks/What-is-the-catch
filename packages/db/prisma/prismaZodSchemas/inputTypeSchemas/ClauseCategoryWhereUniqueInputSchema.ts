import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryWhereInputSchema } from './ClauseCategoryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TriggerListRelationFilterSchema } from './TriggerListRelationFilterSchema';
import { CategoryHitListRelationFilterSchema } from './CategoryHitListRelationFilterSchema';

export const ClauseCategoryWhereUniqueInputSchema: z.ZodType<Prisma.ClauseCategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    slug: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => ClauseCategoryWhereInputSchema),z.lazy(() => ClauseCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseCategoryWhereInputSchema),z.lazy(() => ClauseCategoryWhereInputSchema).array() ]).optional(),
  version: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  defaultScoring: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  triggerInstruction: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  triggerKeywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Trigger: z.lazy(() => TriggerListRelationFilterSchema).optional(),
  CategoryHit: z.lazy(() => CategoryHitListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.ClauseCategoryWhereUniqueInput>;

export default ClauseCategoryWhereUniqueInputSchema;
