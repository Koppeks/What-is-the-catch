import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { SectionUncheckedUpdateManyWithoutParentNestedInputSchema } from './SectionUncheckedUpdateManyWithoutParentNestedInputSchema';
import { BlockUncheckedUpdateManyWithoutSectionNestedInputSchema } from './BlockUncheckedUpdateManyWithoutSectionNestedInputSchema';

export const SectionUncheckedUpdateWithoutParentInputSchema: z.ZodType<Prisma.SectionUncheckedUpdateWithoutParentInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  documentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  headingBlockId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  children: z.lazy(() => SectionUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  Block: z.lazy(() => BlockUncheckedUpdateManyWithoutSectionNestedInputSchema).optional(),
});

export default SectionUncheckedUpdateWithoutParentInputSchema;
