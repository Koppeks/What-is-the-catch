import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { ClauseCategoryUpdatetriggerKeywordsInputSchema } from './ClauseCategoryUpdatetriggerKeywordsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TriggerUpdateManyWithoutClauseCategoryNestedInputSchema } from './TriggerUpdateManyWithoutClauseCategoryNestedInputSchema';
import { CategoryHitUpdateManyWithoutCategoryNestedInputSchema } from './CategoryHitUpdateManyWithoutCategoryNestedInputSchema';

export const ClauseCategoryUpdateInputSchema: z.ZodType<Prisma.ClauseCategoryUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  defaultScoring: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  triggerInstruction: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  triggerKeywords: z.union([ z.lazy(() => ClauseCategoryUpdatetriggerKeywordsInputSchema), z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Trigger: z.lazy(() => TriggerUpdateManyWithoutClauseCategoryNestedInputSchema).optional(),
  CategoryHit: z.lazy(() => CategoryHitUpdateManyWithoutCategoryNestedInputSchema).optional(),
});

export default ClauseCategoryUpdateInputSchema;
