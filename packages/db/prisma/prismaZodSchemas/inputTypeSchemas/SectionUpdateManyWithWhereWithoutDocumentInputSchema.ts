import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionScalarWhereInputSchema } from './SectionScalarWhereInputSchema';
import { SectionUpdateManyMutationInputSchema } from './SectionUpdateManyMutationInputSchema';
import { SectionUncheckedUpdateManyWithoutDocumentInputSchema } from './SectionUncheckedUpdateManyWithoutDocumentInputSchema';

export const SectionUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.SectionUpdateManyWithWhereWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => SectionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SectionUpdateManyMutationInputSchema), z.lazy(() => SectionUncheckedUpdateManyWithoutDocumentInputSchema) ]),
});

export default SectionUpdateManyWithWhereWithoutDocumentInputSchema;
