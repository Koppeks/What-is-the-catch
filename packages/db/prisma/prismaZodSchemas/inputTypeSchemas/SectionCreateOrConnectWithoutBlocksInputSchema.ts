import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionCreateWithoutBlocksInputSchema } from './SectionCreateWithoutBlocksInputSchema';
import { SectionUncheckedCreateWithoutBlocksInputSchema } from './SectionUncheckedCreateWithoutBlocksInputSchema';

export const SectionCreateOrConnectWithoutBlocksInputSchema: z.ZodType<Prisma.SectionCreateOrConnectWithoutBlocksInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SectionCreateWithoutBlocksInputSchema), z.lazy(() => SectionUncheckedCreateWithoutBlocksInputSchema) ]),
});

export default SectionCreateOrConnectWithoutBlocksInputSchema;
