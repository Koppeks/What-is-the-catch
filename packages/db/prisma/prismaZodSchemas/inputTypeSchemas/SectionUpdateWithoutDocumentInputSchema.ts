import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BlockUpdateOneRequiredWithoutSectionNestedInputSchema } from './BlockUpdateOneRequiredWithoutSectionNestedInputSchema';
import { SectionUpdateOneWithoutChildrenNestedInputSchema } from './SectionUpdateOneWithoutChildrenNestedInputSchema';
import { SectionUpdateManyWithoutParentNestedInputSchema } from './SectionUpdateManyWithoutParentNestedInputSchema';
import { BlockUpdateManyWithoutSectionNestedInputSchema } from './BlockUpdateManyWithoutSectionNestedInputSchema';

export const SectionUpdateWithoutDocumentInputSchema: z.ZodType<Prisma.SectionUpdateWithoutDocumentInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  headingBlock: z.lazy(() => BlockUpdateOneRequiredWithoutSectionNestedInputSchema).optional(),
  parent: z.lazy(() => SectionUpdateOneWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => SectionUpdateManyWithoutParentNestedInputSchema).optional(),
  Block: z.lazy(() => BlockUpdateManyWithoutSectionNestedInputSchema).optional(),
});

export default SectionUpdateWithoutDocumentInputSchema;
