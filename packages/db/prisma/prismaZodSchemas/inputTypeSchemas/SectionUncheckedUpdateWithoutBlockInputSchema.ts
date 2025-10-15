import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SectionUncheckedUpdateManyWithoutParentNestedInputSchema } from './SectionUncheckedUpdateManyWithoutParentNestedInputSchema';

export const SectionUncheckedUpdateWithoutBlockInputSchema: z.ZodType<Prisma.SectionUncheckedUpdateWithoutBlockInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  documentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  headingBlockId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  children: z.lazy(() => SectionUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
});

export default SectionUncheckedUpdateWithoutBlockInputSchema;
