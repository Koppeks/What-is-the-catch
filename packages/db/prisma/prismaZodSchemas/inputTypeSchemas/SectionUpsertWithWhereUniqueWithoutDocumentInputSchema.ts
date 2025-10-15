import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateWithoutDocumentInputSchema } from './SectionUpdateWithoutDocumentInputSchema';
import { SectionUncheckedUpdateWithoutDocumentInputSchema } from './SectionUncheckedUpdateWithoutDocumentInputSchema';
import { SectionCreateWithoutDocumentInputSchema } from './SectionCreateWithoutDocumentInputSchema';
import { SectionUncheckedCreateWithoutDocumentInputSchema } from './SectionUncheckedCreateWithoutDocumentInputSchema';

export const SectionUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.SectionUpsertWithWhereUniqueWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SectionUpdateWithoutDocumentInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => SectionCreateWithoutDocumentInputSchema), z.lazy(() => SectionUncheckedCreateWithoutDocumentInputSchema) ]),
});

export default SectionUpsertWithWhereUniqueWithoutDocumentInputSchema;
