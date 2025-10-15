import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateWithoutDocumentInputSchema } from './SectionUpdateWithoutDocumentInputSchema';
import { SectionUncheckedUpdateWithoutDocumentInputSchema } from './SectionUncheckedUpdateWithoutDocumentInputSchema';

export const SectionUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.SectionUpdateWithWhereUniqueWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SectionUpdateWithoutDocumentInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutDocumentInputSchema) ]),
});

export default SectionUpdateWithWhereUniqueWithoutDocumentInputSchema;
